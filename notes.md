# Typescript Compilation Funnys
```
try {
    exports.__esModule = true;   
} catch (ReferenceError) {
    console.log();
}
```
removes the exports is not defined error

```
import { RSA_PKCS1_OAEP_PADDING } from "constants";
```
fixes vscode duplicate function nonsense 
>why? how? what is this?