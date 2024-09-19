CSS rules define how styles are applied to HTML elements. Each CSS rule consists of a selector and a declaration block. Here's a summary of the key components and concepts:

1. Selector:
Purpose: Identifies which HTML elements the rule applies to.
Example: 
  p, .class, #id, div p.

2. Declaration Block:
Purpose: Contains one or more style declarations enclosed in curly braces {}.
Format: Each declaration includes a property and a value, separated by a colon : and ending with a semicolon ;.
Example:
  {
    property: value;
  }

3. Declaration:
Property: Specifies the style attribute to change (e.g., color, font-size).
Value: Specifies the value of the property (e.g., red, 16px).
Example of a CSS Rule:
  p {
    color: blue;           /* Property: color, Value: blue */
    font-size: 16px;       /* Property: font-size, Value: 16px */
  }

4. Specificity:
Purpose: Determines which CSS rule is applied if multiple rules match the same element.
Hierarchy: Inline styles > IDs > Classes, attributes, and pseudo-classes > Elements and pseudo-elements.
Example: #id is more specific than .class, which is more specific than p.

5. Inheritance:
Purpose: Some CSS properties are inherited from parent elements to child elements.
Example: Font styles applied to a <body> element will be inherited by its child elements unless overridden.

6. Important Rule:
Purpose: Overrides other rules due to its higher priority.
Usage: !important is added after a value.
Example:
  p {
    color: blue !important; /* This will override other color rules for <p> */
  }

Summary:
- Selectors: Identify elements to style (p, .class, #id).
- Declaration Block: Contains style declarations ({ property: value; }).
- Declaration: Defines style attributes (color: red).
- Specificity: Determines which rule applies when multiple rules match.
- Inheritance: Some styles are inherited from parent to child elements.
- Important Rule: !important increases priority to override other styles.
- These components work together to apply consistent and specific styles to elements on a web page.
