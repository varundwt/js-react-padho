Event Bubbling -
Dom का Concept है, जब कोई element event recieve करता है तो वो उस element से आपने ancestors के through होते हुये root element तक bubble (propagate) होता है।
ये events का default behaviour है।
रोकने के लिये - event logic के अंदर event का नाम.stopPropagation();

element1.addEventListener("click", (e)=>{
  Console.log('hello");
  e.stopPropagation();
});

Event Capturing / Trickling -
Event Bubbling का reverse है जिसमें root से element की तरफ (बाहर से मंदर के क्रम में) event execute होगा।
रोकने के लिये event के तीसरे argument में true/false लिखते हैं। By default empty होती है मतलब fase. मतलब default में हमेशा bubbling होती है, true करें तो Capturing होगी। 

element2.addEventListener("click", (e)=>{
Console.log("hello");
}, true);

- null एक empty object है व undefined (reserved) खाली जगह तो CEP में भरती है।
