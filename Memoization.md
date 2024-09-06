useMemo() Hook -
कभी Component में कोई heavy expensive calculation vala logic हो सकता है। ऐसे में हर minor state update होने Component rerender होगा
और यही calculation बार-बार होगी which can make our webapp slow or crash. is performance issue को useMemo hook से resolve किया जा सकता है।
ये एक dependery leta है जिसके update होने पर ही ये Calalation या logic run होगा।

Const heavyLogic = usmemo (() => {
  कोई बड़ा ।agic:
},[]);
