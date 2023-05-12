import * as React from "react"



const IndexPage = () => {
  return (
    <main className=" flex flex-col items-center">

      <div className="flex flex-col items-center position: fixed top-2 right-4">
        <h1 className="text-primary text-md">TORONTO, ON</h1>
        <p className="text-secondary text-xs pl-0.5 -mt-[5px]">43.6532° N, 79.3832° W</p>
      </div>
      <div className="flex text-3xl">
        <div>
          SI
        </div>
        <div>
            N
        </div>
        <div>
           SE
        </div>
        <div>
            N
        </div>
      </div>
      
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
