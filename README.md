# Assignement - Build a web application using any technologies you prefer

Client/Server App

1. Create a simple web application, the webapp should include the following:
-Title - "The Matrix"
-Two input boxes for X(Columns)/Y(Rows)
-Sort button
2. After the user input the X/Y value we should create and display a random matrix with X columns and Y rows. Matrix should be filled with numbers from 1 until X*Y. Numbers should not repeat. (Optional: update the matrix in real time if the user changes the X/Y values).
3. When clicking the sort button we should send to the server the matrix and sort it by rows and columns (All rows and all columns should be sorted). (Optional: write a simple sort algorithm).
4. Return the sorted array to the client.
5. Show a popup with the following details:
-Time it took to sort the array
-Number of steps we did to sort the array (relevant only for self written algorithm).
-The sorted array

Notes:
-Handle invalid input in any reasonable method
-Design the page in a simple way
-O(n^2) is good for out sort.

## To run:
1. `npm i` or `yarn add`
2. `npm start` or `yarn start`