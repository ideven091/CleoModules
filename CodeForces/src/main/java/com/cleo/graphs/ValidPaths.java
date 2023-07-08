package com.cleo.graphs;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.*;

public class ValidPaths {



    public static int validPaths(Map<Integer,List<Integer>> paths, int N){
        int count=N;
        Set<Integer> seen = new HashSet<>();
        for (int i = 1; i <=N ; i++) {
            dfsUtil(paths,i,seen);
        }

        return count;
    }

    public static void dfsUtil(Map<Integer,List<Integer>> paths,int source, Set<Integer> seen){

    }
    public static void main(String[] args) throws Exception {
        Scanner in = new Scanner(System.in);
        int T = in.nextInt();
        while(T-->0){
            int N = in.nextInt();
            Map<Integer, List<Integer>> connectedComponents = new HashMap<>();
            for (int i = 1; i <=N ; i++) {
                connectedComponents.put(i,new ArrayList<>());
            }
            while(N-->0) {
                int source = in.nextInt();
                int destination = in.nextInt();

                connectedComponents.get(source).add(destination);
                connectedComponents.get(destination).add(source);
            }
            System.out.println(validPaths(connectedComponents,N));
        }
    }
}
