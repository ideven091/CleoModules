package com.cleo.basic;
import java.util.*;
import java.lang.*;
import java.io.*;

public class ZOOZ {
    /* package codechef; // don't place package name! */


    /* Name of the class has to be "Main" only if the class is public. */

        public static void main (String[] args) throws java.lang.Exception
        {
            // your code goes here
            Scanner in = new Scanner(System.in);
            int T = in.nextInt();
            StringBuilder even=new StringBuilder("1001");//100101
            StringBuilder odd = new StringBuilder("010");

            while(T-->0){
                int N = in.nextInt();
                if(N%2==0){
                    N=N-4;
                    even.append("01".repeat(Math.max(0, N/2)));
                    System.out.println(even);
                }else{
                    N=N-3;
                    odd.append("10".repeat(Math.max(0,N/2)));
                    System.out.println(odd);
                }

            }
        }


}
