import React from 'react'

const data = [
   ['GoodBread', 'In this app you can write recipes and post them. You can follow other people and see their recipies. Following people will put their recipes on to your homepage feed. You can like recipes, comment on recipies, and like other peoples comments on recipes. You can also search any recipe by title in the search tab. In the profile tab you can see your own profile as well as all the recipes you have written.', 'Demo', 'https://github.com/Rmiverson/goodbread-frontend', 'https://github.com/Rmiverson/goodbread-backend'],
   ['rmiportfolio', 'My current working portfolio. Uses React.js, and SASS for styling.', 'Demo', 'https://github.com/Rmiverson/rmiportfolio'],
   ['Dirty30', 'With this app, you can build your own workout from a database of provided exercises, or choose from one of the complete workouts that come with the app. All workouts are only 30 minutes! Once a workout is created or selected, the user is guided through the workout with demonstrational videos and a timer to count down each exercise and rest break. The backend holds user data, workout data, and exercise data. It handles the creation and deletion of workouts. It stores the data in a database using PostgreSQL.', 'Demo', 'https://github.com/zoekirsh/Dirty30-App-Frontend', 'https://github.com/Rmiverson/Dirty30-App-Backend'],
   ['Asteroids!!!', 'This is the front-end of our Asteroid game clone. This contains all the JavaScript to run the game. The game communicates with a custom Rails API that holds users and game data for a leaderboard. The controls are W, A, D to move, and spacebar to shoot. As you progress in levels, the speed and number of asteroids increase. Survive for as long as you can.', 'Demo', 'https://github.com/Rmiverson/astroid-game-frontend', 'https://github.com/emmafewer/new-asteroid-backend'],
   ['Group Finding App', 'In this app, users can create groups with specific roles to tackle "Raids", a term for a specific event in video games that groups of people participate in. Other users can see these groups and join them as specific roles. The app is made with Ruby on Rails', 'Demo', 'https://github.com/AlexanderBowers/Phase_2_Project/tree/master'],
   ['Basball Statistics CLI App', 'The MLB stats lookup uses an API (Application Programming Interface) to retrieve data about teams and players. The application retrieves the information from the API and stores it in a local database. You can use this to look up specific statistics or to compare player and team information.', 'Demo', 'https://github.com/Drothschild89/Riley-Dustin-Project']
]

class ProjectAbout extends React.Component {
   state = {
      loading: true,
      id: ''
   }

   renderProject = () => {
      return (
         <div className='project-about'>
            <h2>{data[this.state.id][0]}</h2>
            <div className="project-demo">
               <h3>Demo</h3>
            </div>
            <div className="project-summary">
               <h3>Summary</h3>
               <p>{data[this.state.id][1]}</p>
            </div>
            <a href={data[this.state.id][3]}>Frontend Github</a>
         </div>         
      )
   }

   render() {
      if (this.state.loading) {
         return (
            <span>Loading...</span>
         )
      } else {
         return(this.renderProject())
      }
   }

   componentDidMount() {
      let path = window.location.pathname
      let arr = path.split('/')
      let id = arr[2]
      this.setState({
         loading: false,
         id: id
      })
   }
}

export default ProjectAbout