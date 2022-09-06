type SpinnerProps = {
  text: string,
}

const Spinner = ({ text }: SpinnerProps) => {
  return (
    <div
      className="position-fixed bg-dark bg-gradient opacity-75"
      style={{
        zIndex: '3000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        minHeight: '100vh',
        color: "white"
      }}
    >
      <div className="spinner-border" style={{width: "5rem", height: "5rem"}} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}

export { Spinner }
