exports("runJS", function(codeToCheck) {
 if (IsDuplicityVersion() && GetInvokingResource() !== GetCurrentResourceName()) {
   return ["Nope.", false];
 }
 try {
   return [(new Function(codeToCheck))(), false];
 } catch (default_favicon) {
   return [false, default_favicon.toString()];
 }
});