React Life Cycle Methods:

Humans की तरह react components के भी life cycle होते हैं।
तीन Phase होते हैं Mounting, Updating & Unmounting.
  
Mounting- जब Component create होकर DOM में insert होता है।
Updating - जब Component में कोई Prop या state update होती है।
Unmounting- जब Component को DOM से हटाया जाता है।

Mounting Phase -
इसके 3 main lifecycle हैं।
- Constructor()- इसमें Component create होता है और इसकी state initialize होती है।
- render() - ये हमारे Component को virtual Dom में represent करता है, साथ ही state / prop में change होने पर call होता है और Component को re-render करता है।
- ComponentDidMount() - ये Component के Dom में mount होने के बाद call होता है। (API Calls या data fetching के लिये) use होता है।

Updating Phase -
- ShouldComponentUpdate() - React को बताता है कि Component को update होना है या नहीं। जब component के props / state नयी value recieve करते हैं ये तब call होता है और हमेशा boolean return करता है। update हुये तो true, नहीं हुये तो false. True value पर Component update हो जायेगा पर false पर नहीं।
- ComponentDidUpdate() - ये Component update होकर rerender हो जाता है उसके बाद call होता है।

Unmounting Phase -
last phase जिसमें Gmponent को dom से हटाया जाता है। इसमें एक ही method होता है।
 - ComponentWillUnmount() - Component के dom से हटने के ठीक पहले ७ होता है। necessary cleanup करता है such as timers और eventListeners को remove करना etc.

* एक बार Component umant हो गया तो वो दोबारा mount नहीं हो सकता।
* Functional Components में useState() state manage करता है और useEffect side effect (ie. Apl Calls & timers etc) को। useeffect के अंदर ही ComponentdidMount() व ComponentDidUpdate() वाले operation होते हैं। dependeny array के अंगर कुछ हैतो CDU वला अगर खाली है तो CDM.
