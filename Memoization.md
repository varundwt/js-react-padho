useMemo() Hook -

कभी Component में कोई heavy expensive calculation वाला logic हो सकता है। ऐसे में हर minor state update होने Component rerender होगा
और यही calculation बार-बार होगी which can make our webapp slow or crash. इस performance issue को useMemo hook से resolve किया जा सकता है।
ये एक dependery leta है जिसके update होने पर ही ये Calalation या logic run होगा।

Const heavyLogic = usmemo (() => {
  कोई बड़ा ।agic:
},[]);


React.Memo - 
Using memo will cause React to skip rendering a component if its props have not changed. This can improve performance.

  import { memo } from "react";
  const MyComponent = ({ props }) => {
     return (
      <>
        <h2>My Component</h2> 
        {todos.map((props) => {
          return <p>{props}</p>;
        })}
      </>
    );
  };
  export default memo(MyComponent);

Now the component will only re-renders when the props are updated.


Pure Components -
Class component के लिए useMemo का alternative है। ये component को rerender होने से रोकता है। ये current State/props को नयी state/prop से compare करके decide करता है कि component को rerender होना भी चाहिए या नहीं। ये rerendering को restrict करके performance optimise करता है। इसे implement करने के लिये class xyzComponenet extends React.Component की जगह React.PureComponent लिखना होता है। Normal components में ऐसा नहीं होता है, ये state update होने पर rerender हो जाते हैं।
