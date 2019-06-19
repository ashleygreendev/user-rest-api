import database from '../database/database';

class UsersController {
    getAllUsers(req, res) {
        return res.status(200).send({
            sucess: 'true',
            message: 'users retrieved successfully',
            users: database
        });
    }

    getUser(req, res) {
        const id = parseInt(req.params.id, 10);
        database.map((user) => {
            if(user.id === id){
                return res.status(200).send({
                    sucess: 'true',
                    message: 'user retrieved successfully'
                });
            }
        })
    }

    createUser(req, res) {
        if (!req.body.email) {
          return res.status(400).send({
            success: 'false',
            message: 'Email is required',
          });
        } else if (!req.body.username) {
          return res.status(400).send({
            success: 'false',
            message: 'Username is required',
          });
        }
        const user = {
          id: database.length + 1,
          email: req.body.email,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          password: req.body.password,
          username: req.body.username
        };
        database.push(user);
        return res.status(201).send({
          success: 'true',
          message: 'user added successfully',
          user,
        });
      }

      updateUser(req, res) {
        const id = parseInt(req.params.id, 10);
        let userFound;
        let itemIndex;
        database.map((user, index) => {
          if (user.id === id) {
            userFound = user;
            itemIndex = index;
          }
        });
    
        if (!userFound) {
          return res.status(404).send({
            success: 'false',
            message: 'User not found',
          });
        }
    
        if (!req.body.email) {
          return res.status(400).send({
            success: 'false',
            message: 'email is required',
          });
        } else if (!req.body.username) {
          return res.status(400).send({
            success: 'false',
            message: 'username is required',
          });
        }
    
        const newUser = {
          id: userFound.id,
          email: req.body.email || userFound.email,
          username: req.body.username || userFound.username,
          firstName: req.body.firstName || userFound.firstName,
          lastName: req.body.lastName || userFound.lastName,
          password: req.body.password || userFound.password
        };
    
        database.splice(itemIndex, 1, newUser);
    
        return res.status(201).send({
          success: 'true',
          message: 'user added successfully',
          newUser,
        });
      }
    
      deleteUser(req, res) {
        const id = parseInt(req.params.id, 10);
        let userFound;
        let itemIndex;
        database.map((user, index) => {
          if (user.id === id) {
            userFound = user;
            itemIndex = index;
          }
        });
    
        if (!userFound) {
          return res.status(404).send({
            success: 'false',
            message: 'user not found',
          });
        }
        database.splice(itemIndex, 1);
    
        return res.status(200).send({
          success: 'true',
          message: 'user deleted successfuly',
        });
      }
    }
    
    const userController = new UsersController();
    export default userController;