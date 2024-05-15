# Type Guards

When there are union types, a pitfall is executing certain code based on the "Type" of the alias or interface. 
To solve this, we use "Type Guards" which is basically just code to check the alias or interface "Type". 

For aliases, we could use something like the method "typeof" to check the type of the variable. 

For interfaces, we can assign another property to be common amongst all the interfaces that are needed for the function, etc. 

