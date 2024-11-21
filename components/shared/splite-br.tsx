import React from "react"

export const SplitBr = ({data}: {data:string}) => {
  return(
    <>
    {data.split('<br />').map((line, index) => (
      <React.Fragment key={index}>
        {line.trim()}
        {index < data.split('<br />').length - 1 && <br />}
      </React.Fragment>
    ))}
    </>
  )
    
  }