Ref - 
ये forcefully Dom को manipulate कर सकता है जो react documentation के हिसाब से या तो avoid करना चाहिये या worst case scenario में use करना चाहिये।
ये react के traditional rendering flow से हटकर dom elements को manipulate कर सकता है। इनका use तब करना चाहिये जब हम third party libraries
use कर रहे हों या animation या media playbacks से deal कर रहे हों। इसे functional components और Redux से associated libraries/framewaly में use नहीं करना चाहिये।

useRef Hook- 
functional Components में DOM manipulation करता है और rerenders में muatable values को (जो update होने पर re-renders trigger नहीं करती) store करता है।
  let xyzRef = useRef (null);
फिर इसी ref को use कर सकते हैं component में xyzRef.current से। एक function बना देना Count handle करने का।
useRef की default value zero करके, xyzRef.current = xyzRef.current + 1 logic देकर button पर onClick लगा देना।
alert("clicked" + xyuRef.current + "times");

forwardRef - 
अगर एक component से दूसरे का DOM manipulate करना हो तो forward Ref. ऐसे component को export करते समय
export default forwardRef(Xy2 Component); करना होता है।
