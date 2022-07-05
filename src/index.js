module.exports = function toReadable (number) {
    let masiv="";
    let mas="";
    let masiv2="";
    let str = String(number);
    let a;
    let b;
    let c;
    let count=str.length;
    if (count==1){
      a=+str[0];
      if(a==0)
      {masiv = "zero";}
      else{
       masiv = num(a); 
      }
      
     }
        function num(n){
          switch (n){
          case 1: mas ="one"; break;
          case 2: mas ="two"; break;
          case 3: mas ="three"; break;
          case 4: mas ="four"; break;
          case 5: mas ="five"; break;
          case 6: mas ="six"; break;
          case 7: mas ="seven"; break;
          case 8: mas ="eight"; break;
          case 9: mas ="nine"; break;
          case 0: break;
      } 
        return mas;
        }

       function tenth(a,b){ 
             
      if(a==1 && b==0)
        { masiv += "ten";}
        else
        if(a==1 && b==1)
        { masiv += "eleven";}
        else
        if(a==1 && b==2)
        { masiv += "twelve";}
        else
        if(a==1 && b==3)
        { masiv += "thirteen";}
        else
        if(a==1 && b==5)
        { masiv += "fifteen";}
        else
        if(a==1 && b==8)
        { masiv += "eighteen";}
        else if (a==1)
        { masiv += num(b)+"teen";}
        if (a==2 && b==0)
        { masiv += "twenty";}
        else if (a==2)
        { masiv += "twenty"+ " "+ num(b);}
        if (a==3 && b==0)
        { masiv += "thirty";}
        else if (a==3)
        { masiv += "thirty"+ " "+ num(b);}
        if (a==4 && b==0)
        { masiv += "forty";}
        else if (a==4)
        { masiv += "forty"+ " "+ num(b);}
        if (a==5 && b==0)
        { masiv += "fifty";}
        else if (a==5)
        { masiv += "fifty"+" "+ num(b);}
        if (a==6 && b==0)
        { masiv += "sixty";}
        else if (a==6)
        { masiv += "sixty"+" "+ num(b);}
        if (a==7 && b==0)
        { masiv += "seventy";}
        else if (a==7)
        { masiv += "seventy"+" "+ num(b);}
        if (a==8 && b==0)
        { masiv += "eighty";}
        else if (a==8)
        { masiv += "eighty"+" "+ num(b);}
        if (a==9 && b==0)
        { masiv += "ninety";}
        else if (a==9)
        { masiv += "ninety"+" "+ num(b);}
        
        return masiv;
       }

      if (count==2)
      { a=+str[0];
        b=+str[1];
        
         masiv += tenth(a,b); 
        }


    if(count == 3)
    { a = +str[0];
      b=+str[1];
      c=+str[2];
      if(b==0 && c==0){
        masiv=num(a)+" " +"hundred";
      }
      else 
      if (b==0)
      { masiv=num(a)+" " +"hundred"+" " +num(c);
    }
    else{ masiv=num(a)+" " +"hundred"+ " "+tenth(b,c);}
        
    }
   return masiv;
}
