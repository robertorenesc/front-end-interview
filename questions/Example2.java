package questions;

import java.util.Arrays;

public class Example2 {
    
    public static void main(String[] args) {
        int[] example = new int[] {6, 8, 1, 4, 3, 10, 5, 0, 2, 7, 9, 11, 14};
        //int[] example = new int[] {-6, -8, -1, -3, -4, 0};
        //int[] example = new int[] {-100, 1, 1, 28, 0};
        int sol = new Example().solution1(example);
        System.out.println(sol);
    }

    public int solution1(int[] A) {
        this.print(A);
        Arrays.sort(A);
        this.print(A);

        for(int i = 1; i < A.length; i++) {
            if(A[i] - A[i-1] > 1 && A[i] > 0) {
                return A[i - 1] + 1;
            }
        }

        return A[A.length - 1] > 0 ? A[A.length - 1] + 1: 1;
    }

    public void print(int[] list) {
        System.out.print("[ ");
        for(int i: list) {
            System.out.print(" " + i + " ");
        }
        System.out.print("]\n");
    }

}
