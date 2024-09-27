Meta tags are used in HTML to provide metadata about a web page. They are placed inside the <head> section of the HTML document and offer information that is not directly visible to users but can be used by browsers, search engines, and other web services.

Common Meta Tags and Their Uses

Character Set
Purpose: Specifies the character encoding for the document.
Usage:
<meta charset="UTF-8">

Viewport Settings
Purpose: Controls the layout on mobile browsers by setting the viewport width and scale.
Usage:
<meta name="viewport" content="width=device-width, initial-scale=1.0">

Description
Purpose: Provides a brief description of the page’s content. Used by search engines in search results.
Usage:
<meta name="description" content="A brief description of the page content.">

Keywords
Purpose: Specifies keywords relevant to the page's content (less used for SEO purposes nowadays).
Usage:
<meta name="keywords" content="keyword1, keyword2, keyword3">

Author
Purpose: Defines the author of the document.
Usage:
<meta name="author" content="Author Name">

Robots
Purpose: Controls how search engines index the page and follow links.
Usage:
<meta name="robots" content="index, follow">

Refresh
Purpose: Automatically refreshes the page or redirects to another URL after a specified time.
Usage:
<meta http-equiv="refresh" content="30"> <!-- Refresh every 30 seconds -->
<meta http-equiv="refresh" content="0; url=https://example.com"> <!-- Redirect immediately -->

Open Graph (OG)
Purpose: Provides metadata for social media platforms to generate rich previews of the page content.
Usage:
<meta property="og:title" content="Title of the page">
<meta property="og:description" content="Description of the page">
<meta property="og:image" content="URL to image">
<meta property="og:url" content="URL of the page">

Twitter Card
Purpose: Defines how content should be displayed when shared on Twitter.
Usage:
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Title of the page">
<meta name="twitter:description" content="Description of the page">
<meta name="twitter:image" content="URL to image">

Viewport-Scale
Purpose: Defines the scale of the viewport for responsive design.
Usage:
<meta name="viewport" content="width=device-width, initial-scale=1">

Summary
Character Set: <meta charset="UTF-8">
Viewport Settings: <meta name="viewport" content="width=device-width, initial-scale=1.0">
Description: <meta name="description" content="Page description">
Keywords: <meta name="keywords" content="keywords">
Author: <meta name="author" content="Author Name">
Robots: <meta name="robots" content="index, follow">
Refresh: <meta http-equiv="refresh" content="30">
Open Graph: <meta property="og:title" content="Title">
Twitter Card: <meta name="twitter:card" content="summary_large_image">
Meta tags are essential for improving the accessibility, SEO, and social media sharing of web pages.
