import React from "react";

// export default function ex2_image() {
//   return (
//     <div>
//       <img src="/logo512.png" style={{ height: 100 }} />
//       <img src="/images/logo512.png" style={{ height: 100 }} />
//     </div>
//   );
// }

export default function ex2_image(props) {
  return (
    <div>
      <img src="/logo512.png" style={{ height: 100 }} />
      <img src="/images/logo512.png" style={{ height: 100 }} />
      {props.image && <img src={props.image} height="100" />}
    </div>
  );
}
