package questions;

public class Example{
    
    public static void main(String[] args) {
        int[] example = new int[] {6, 8, 1, 3, 3, 10, 5, 1, 2, 7, 9};
        //int[] example = new int[] {-6, -8, -1, -3, -4, 0};
        //int[] example = new int[] {-100, 1, 1, 28, 0};
        int sol = new Example().solution1(example);
        System.out.println(sol);
    }

    public int solution1(int[] A) {
        this.print(A);
        int[] ordered = this.sort(A);
        this.print(ordered);

        for(int i = 1; i < ordered.length; i++) {
            if(ordered[i] - ordered[i-1] > 1 && ordered[i] > 0) {
                return ordered[i - 1] + 1;
            }
        }

        return ordered[ordered.length - 1] > 0 ? ordered[ordered.length - 1] + 1: 1;
    }

    public int[] sort(int[] list) {
        int aux = 0;
        for(int i = 0; i < list.length; i++) {
            for(int j = i + 1; j < list.length; j++) {
                if(list[i] > list[j]) {
                    aux = list[i];
                    list[i] = list[j];
                    list[j] = aux;
                }
            }
        }
        return list;
    }

    public void print(int[] list) {
        System.out.print("[ ");
        for(int i: list) {
            System.out.print(" " + i + " ");
        }
        System.out.print("]\n");
    }

}
