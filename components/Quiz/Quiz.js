import { Widget } from '@typeform/embed-react';

export default function Quiz({ id }) {
  return (
    <Widget
      id={id}
      style={{ width: '100%', height: '80vh' }}
      className="my-form"
    />
  );
}
