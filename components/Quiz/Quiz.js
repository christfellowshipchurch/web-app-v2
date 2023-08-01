
import { Widget } from '@typeform/embed-react'

export default function Quiz({title}) {

    return (
        <div>
         <Widget id={title} style={{ width: '100%', height:'800px'}} className="my-form" />
      </div>
    )
}

