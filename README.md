# Frogger Game
- Created by [Ali Ali](https://github.com/alibeniaminali)

## Where to play
- No installation needed!
- Follow the link and play 👉 [here](https://alibeniaminali.github.io/Frogger-Game/) 👈

## Timeline
- 7 days

## Build with
- HTML5 (including audio)
- CSS
- Vanilla JavaScript

## Overview 

The game is a representation of the classic arcade action game Frogger created in 1981.
This was my first project for General Assembly's Software Engineering Immersive course. It was an individual project assigned to us after three weeks of learning and built in less than a week.

## Requirements
- The game should be playable for one player.
- The obstacles should be auto generated.

## How to Play
- This game is a desktop-only website and requires the use of your keyboard arrow keys.
- Please, take advantage of full-screen mode for a better experience.
- Sound on! 🔉
#### To win ✔️ :
- The object of the game is simply to navigate the little frog across the road, swim across the canal and get to the lily pad on the other side of the game board.
- To make things more challenging there are numerous moving obstacles that the frog must avoid to reach his destination.
#### To lose ☠️ :
- The frog must avoid the traffic 🚙 , swim across the canal and be cautious of unfriendly fish 🐟 ! 
### To play again
- Once the win/lose condition has been met, the "Try Again!" button must be pressed to play again.

## Game structure
#### Creating the grid
- Instead of creating the grid using HTML5 and adding 100 "div" tag lines to it.
  </br>
- I decided to take a different approach and add the grid cells in an array and use a for loop instead.
  </br>
- This way the code looked more organised and clean.
  
  ![Screenshot 2022-01-16 at 00 38 19](https://user-images.githubusercontent.com/94930059/149642775-ef9f72f9-d259-4f2b-af24-c1289c8f5770.png)
  </br>
![Screenshot 2022-01-16 at 00 37 42](https://user-images.githubusercontent.com/94930059/149642790-8e703a22-52e2-4d24-b5e9-2448df7ec846.png)
</br>

#### Adding the road,canals and the obstacles 
- Using slice() method I created a shallow copy of a portion of the cells array into a new array object selected from start to end where start and end represent the index of items in that array.
</br>

![Screenshot 2022-01-16 at 00 58 25](https://user-images.githubusercontent.com/94930059/149643243-082e59b4-a310-4345-a804-3c08b52c7a6a.png)

</br>

![Screenshot 2022-01-16 at 00 58 14](https://user-images.githubusercontent.com/94930059/149643248-4806930b-67d5-49a4-9cf7-b2018c567a10.png)

#### End game - Win or Lose 
- I used only one function where I can check if the frog is colliding with an object and added different styling depending if the player wins or loses.
 
</br>

![Screenshot 2022-01-16 at 01 04 24](https://user-images.githubusercontent.com/94930059/149643429-2bff33c4-0a92-4bef-ba33-f4f1f5e228b4.png)



## Challenges 
- The most difficult part of this project was to make the obstacles move and add opposite movement for the next line of obstacles. 
- At the end I used the setInterval method which repeatedly called the function, with a fixed time delay between each call. 

</br>

![Screenshot 2022-01-16 at 01 16 30](https://user-images.githubusercontent.com/94930059/149643611-71233323-0cfc-4c29-b9a3-3eb67a4bee24.png)

</br>

## Wins 
- Writing the Frogger movement logic snippets above
- Having a smoothly playable and fully functional Frogger game
- Adding separate sound effects to different situations
- Styling my first game
## Future Improvements
- The project was quite challenging for me and I ended with a simple and clean game that I might consider improving in the future.
- Improvements that I might add would be :
</br>
👉 Mobile screen controls
</br>
👉 Size responsive
</br>
👉 Multiple frogs and lilypads
</br>
👉 Time Left future

## Author info
- LinkedIn - [Ali Ali](https://www.linkedin.com/in/alibeniaminali/)


