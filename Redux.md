ये हमारी application की state को manage of update करने वाली library है जिसमें एक centralized store होता है जो हमारी पूरी application में State manage/update करने में use होता है पर state update एक predictable fashion में ही हो सकती है जो react का flow है। Redux के तीन नियम हैं।
- Single Soure Of Truth - हमारे पूरी application की state single store में एक object tree में store होती है। इससे debugging & development fast व easy हो जाता है।
- State is Read only - state read only है व directly change नहीं किया जा सकता। State को  एक 'action' (जो कि एक object है जो ये बताता है कि क्या हुआ) के द्वारा change किया जा सकता है।
- Change Are Made With Pure Functions - action के द्वारा State tree को transform करने के लिए हम एक pure reducer लिखते हैं। इसी reducer मे state का modification होता है। ये एक function होता है जो state व action as arguments लेता है और एक नयी updated State return करता है।

Redux Flow - 
1. जब user application के साथ interact करता है तो एक action dispatch होता है।
2. फिर एक reducer function call होता है जो existing state of dispatched action को लेकर नयी updated state return करता है।
3. Store view को एक Callback function के through notify करती है कि state update हो गयी है और view इस updated state को retrieve करके rerender हो जाता है।
इस तरह से dispatcher से store handle करना व View को update करना Flux Pattern कहलाता है। flux single source of truth पर काम करता है। Redux Flux पर ही काम करता है। Flux का काम data flow को एक direction ने एक Store में रखना है।

Redux Middleware -
Redux middleware is a function that intercepts and extends the Redux action dispatch process. It allows you to handle asynchronous operations (e.g., API calls), logging, error handling, and other side effects before actions reach the reducer.

Key points:
Middleware intercepts actions and can modify, delay, or cancel them.
It allows for asynchronous logic (e.g., API calls) or tasks like logging.
Common middleware includes Redux Thunk (for async actions) and Redux Saga (for handling complex async flows).
Middleware is applied using applyMiddleware when creating the store.
It's useful for managing side effects and keeping components/reducers clean.

Redux Thunk and Redux Saga are middleware for handling asynchronous operations in Redux.

Redux Thunk:
Allows action creators to return functions (instead of objects).
Best for simple async tasks like API calls.
Provides access to dispatch and getState.
Redux Saga:

Uses generator functions to handle complex async flows.
Best for managing more advanced side effects like sequencing actions, retries, or parallel tasks.
Offers fine control over side effects and action flows.

Key Difference:
Thunk is simpler and more direct for basic async needs.
Saga is more powerful for handling complex async logic and side effects.
