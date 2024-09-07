In React, controlled and uncontrolled components refer to how form data is handled 
within components. The difference lies in how the state of form elements (like input, 
textarea, select) is managed.

Controlled Components:
In a controlled component, form data is handled by React's state. The component keeps 
track of the form element's value and updates it in response to user input.
The value of the form element is tied directly to a state property, and any changes to 
the input are made via event handlers like onChange, which updates the state.

Key Features:
- State Control:
The component’s state is the "single source of truth" for form data.
The value of the input is controlled via the value attribute, and user input is handled 
through event handlers like onChange.

- Predictable:
Since React controls the form data, the component always reflects the latest state, 
ensuring predictable behavior.

- Validation & Control:
You can easily validate and modify the form values before storing them in the state, 
giving you more control over user input.
Example:
  function ControlledComponent() {
    const [inputValue, setInputValue] = React.useState("");
  
    const handleChange = (event) => {
      setInputValue(event.target.value);
    };
  
    return (
      <div>
        <input type="text" value={inputValue} onChange={handleChange} />
        <p>Current Input: {inputValue}</p>
      </div>
    );
  }

Here, inputValue is managed by React's state. Any change to the input is reflected by 
the setInputValue function in the onChange handler, keeping the input value synchronized 
with the state.

Uncontrolled Components:
In an uncontrolled component, form data is handled by the DOM itself rather than React's 
state. The component does not directly manage the form element's value, which means the 
data is stored in the DOM and accessed using refs to retrieve the current value.

Key Features:
- DOM-based Control:
The input value is managed by the DOM, not React's state.
You retrieve the value directly from the DOM using refs when needed, such as on form 
submission.

- Less Control:
Since React does not handle form data directly, it’s less efficient to validate or 
manipulate the input values dynamically as compared to controlled components.

- Simpler Setup:

Uncontrolled components are simpler to set up, especially for simple forms where you 
don’t need React's state to constantly track input changes.
Example:
  function UncontrolledComponent() {
    const inputRef = React.useRef(null);
  
    const handleSubmit = () => {
      console.log(inputRef.current.value); // Access the input's current value
    };
  
    return (
      <div>
        <input type="text" ref={inputRef} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    );
  }

Here, the value of the input is accessed directly from the DOM via inputRef.current.value 
when needed, rather than tracking it in state.

Key Differences:
Feature                Controlled Components	                                                      Uncontrolled Components
Data Source	           Data is controlled by React’s state.	                                        Data is handled by the DOM, accessed via ref.
State Management	     Requires onChange handler to update state with each input change.	          No need for state updates on every input change.
Predictability	       Provides more control and predictability over input values.	                Less predictable since values are not synced with React state.
Usage	                 Better for complex forms with dynamic validations or transformations.	      Simpler forms where you don't need to track input changes closely.
Validation	           Can validate on every change easily via state.	                              Validation is typically done after retrieving the value from the DOM.

When to Use:
Controlled Components: Use when you need to closely manage the form data, validate 
input dynamically, or control the form values based on state.
Uncontrolled Components: Use for simpler forms where you only need to get the value 
on form submission and don’t need to validate or manipulate the input frequently.

Both patterns are useful depending on the complexity of the form and how much control 
over form input you need.
