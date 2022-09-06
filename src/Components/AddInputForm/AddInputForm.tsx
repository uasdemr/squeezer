import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { NewSqueezedLink } from "../../types/app"
import { squeeze } from "../../store/api-action";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { dropData, dropSorting, offsetStart } from "../../store/books-slice";

const AddInputForm = () => {

  const schema = yup.object({
    full: yup.string().url('URL is not valid').required(),
  }).required();

  const { register, handleSubmit, formState: { errors, isValid }, setError, reset } = useForm<NewSqueezedLink>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data: NewSqueezedLink) => {
    dispatch(squeeze(data))
    reset()
  }
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(dropSorting())
    dispatch(dropData())
    dispatch(offsetStart())
  }, [])

  return (
    <section className="pt-5 ps-5 pe-5">
      <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="col-12">
          <label htmlFor="validationCustom02" className="form-label">Enter a URL to squeeze</label>
          <input
            id="validationCustom02"
            type="text"
            className="form-control"
            {...register("full")}
          />
          {errors.full && <div>{errors.full.message}</div>}
        </div>
        <div className="col-12">
          <button
            className="btn btn-primary"
            type="submit"
            disabled={!isValid}
          >
            Submit form
          </button>
        </div>
      </form>
    </section>
  )
}

export default AddInputForm
