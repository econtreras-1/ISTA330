
/*
The array cookies represent the number of cookies that each kid has. 
Given the array cookies and an integer extraCookies, determine whether there is a
way to distribute the extraCookies among the kids in a way that kids get equal number of cookies.
Example: input: cookies = [3, 5, 8] , extraCookies = 8
         output: true
         Because we can give 5 of the extraCookies to the first kid and the remaining 3 to the second kid
         and therfore each of the three kids will get 8 cookies.
 */

 var canGetEqualCookies = function(cookies, extraCookies) {
         for (var i = 1; i < cookies.length; i++){
                 if (extraCookies < 0){
                         return false;
                 }else{
                         while (cookies[i] !== cookies[i+1]){
                                 cookies[i]+=1
                                 extraCookies-=1
                                 if (extraCookies < 0){
                                         return false;
                                 }
                         }
                         return true;
                 }
         }
 };
