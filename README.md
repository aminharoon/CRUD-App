# User Management CRUD Application

A full-stack user management application built with React frontend and Node.js backend, featuring complete CRUD (Create, Read, Update, Delete) operations.

## 📋 Features

- ✅ Create new users with name and age
- 📖 View all users in a card-based layout
- ✏️ Update user information (partial or complete)
- 🗑️ Delete users
- 🔄 Real-time data synchronization
- 📱 Responsive user interface

## 🛠️ Tech Stack

### Frontend
- **React** - UI library
- **Axios** - HTTP client for API requests
- **Vite/Create React App** - Build tool (depending on your setup)

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework (assumed)
- **MongoDB** - Database (assumed based on `_id` field)

## 📁 Project Structure

```
project-root/
├── frontend/               # React application
│   ├── src/
│   │   ├── App.jsx        # Main application component
│   │   └── ...
│   └── package.json
├── backend/               # Node.js API server
│   ├── routes/
│   ├── models/
│   └── server.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or cloud instance)

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file with your configuration:
```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
```

4. Start the backend server:
```bash
npm start
```

The API will run on `http://localhost:3000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open in your browser at `http://localhost:5173` (or your configured port)

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/node` | Retrieve all users |
| POST | `/api/node` | Create a new user |
| PATCH | `/api/node/:id` | Partially update a user (age) |
| PUT | `/api/node/:id` | Completely update a user |
| DELETE | `/api/node/:id` | Delete a user |

### Request/Response Examples

**Create User (POST)**
```json
// Request
{
  "name": "John Doe",
  "age": "25"
}

// Response
{
  "node": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "age": "25"
  }
}
```

**Get All Users (GET)**
```json
// Response
{
  "node": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "name": "John Doe",
      "age": "25"
    }
  ]
}
```

## 💡 Usage

### Adding a New User
1. Enter the user's name in the first input field
2. Enter the user's age in the second input field
3. Click the "Submit" button
4. The user will be added and displayed in the list

### Viewing All Users
- Click the "show all user's" button to view all registered users

### Editing User Information
- **Edit Age Only**: Click the "Edit age" button on a user card
- **Edit Complete Info**: Click the "Edit" button to update both name and age

### Deleting a User
- Click the "Delete" button on the user card you want to remove

## 🎨 Styling

The application uses custom CSS classes. Make sure to include your stylesheet with the following classes:
- `.formCon` - Form container
- `.container` - Users grid container
- `.card` - Individual user card
- `.buttonCon` - Button container
- `.deleteButton` - Delete button styling
- `.update` - Update button modifier
- `.edit` - Edit button modifier
- `.backButton` - Back button styling
- `.showAllUsers` - Show users button styling

## 🔧 Configuration

### Changing API Base URL

If your backend runs on a different port or domain, update the axios base URL in `App.jsx`:

```javascript
const API_BASE_URL = "http://localhost:3000/api/node";
```

Or configure axios globally:
```javascript
axios.defaults.baseURL = 'http://localhost:3000';
```

## 🐛 Known Issues & Improvements

### Current Limitations
- Uses `prompt()` for edit operations (not user-friendly)
- No form validation on the backend
- No error handling UI feedback
- Age stored as string instead of number

### Suggested Improvements
- [ ] Add modal dialogs for edit operations
- [ ] Implement form validation (both client and server)
- [ ] Add loading states and error messages
- [ ] Add confirmation dialogs for delete operations
- [ ] Implement pagination for large datasets
- [ ] Add search/filter functionality
- [ ] Use proper TypeScript types
- [ ] Add authentication and authorization

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

Your Name - [GitHub Profile](https://github.com/aminharoon)

## 🤝 Contributing

Contributions are welcome! Feel free to contribute to this project.

Contributions, issues, and feature requests are always welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support, email aminharoon699@gmail.com or open an issue in the repository.

---

**Note**: Make sure both frontend and backend servers are running simultaneously for the application to work properly.
