
import { Widget } from '@typeform/embed-react'
import { useRouter } from 'next/router';

export default function Quiz() {

    const router = useRouter();
    const { title } = router.query;

    return (
        <div>
         <Widget id={title} style={{ width: '100%', height:'800px'}} className="my-form" />
      </div>
    )
}

