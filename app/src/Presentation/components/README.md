The directories use an atomic structure.
https://atomicdesign.bradfrost.com/chapter-2/

**Atoms** of our interfaces serve as the foundational building blocks that comprise all our user interfaces. These atoms include basic HTML elements like form labels, inputs, buttons, and others that can’t be broken down any further without ceasing to be functional.

**Molecules** are relatively simple groups of UI elements functioning together as a unit. For example, a form label, search input, and button can join together to create a search form molecule.

**Organisms** are relatively complex UI components composed of groups of molecules and/or atoms and/or other organisms. These organisms form distinct sections of an interface.

**Pages** are the highest level of fidelity and are specific to the project/application. Pages are comprised of components and are the place where components are put together.
