## The different types of rendering :

- What is Rendering?

  There is an unavoidable unit of work to convert the code you write in React into the HTML representation of your UI. This process is called rendering.

  Rendering can take place on the server or on the client. It can happen either ahead of time at build time, or on every request at runtime.

  With Next.js, three types of rendering methods are available: Server-Side Rendering, Static Site Generation, and Client-Side Rendering.

- Pre-Rendering :

  Server-Side Rendering and Static Site Generation are also referred to as Pre-Rendering because the fetching of external data and transformation of React components into HTML happens before the result is sent to the client.

- Client-Side Rendering vs. Pre-Rendering


## Create a route in NextJs : 

  NextJs uses a "pages" directory for the app routing. Each pages inside the app directory are considered as routes.

  The homepage of the app is the "page.tsx" in the "src/app" directory and every other directory inside it with a "page.tsx" file are accessible as routes. 

  Routing example : 

  Inside the app directory a "first-page" directory has been created with a "page.tsx" returning html elements.
  The URL of this element will be "/first-page".