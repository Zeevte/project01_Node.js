import userSchema from "../Models/UsersSchma.js";
const UsersControllers = {

    login: async (req, res) => {
        const { name, password } = req.body;
        try {
            const newUser = await userSchema.findOne({ name, password });
            res.json(newUser);
        }
        catch (error) {
            console.log(error.message)
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    add: async (req, res) => {
        const { name, email, password, role, lastDate } = req.body;
        console.log(name, email, password, role, lastDate)
        try {
            const newUser = await userSchema.create({ name, email, password, role, lastDate});
            res.json(newUser);
        }
        catch (error) {
            console.log(error.message)
            res.status(500).json({ message: 'Internal server error' });
        }
    },
    update: async (req, res) => {
        const { id } = req.params;
        try {
            const updatedUser = await userSchema.findByIdAndUpdate(
                id, req.body,
                { new: true, });
            res.json(updatedUser);
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    },
    delete: (async (req, res) => {
        try {
            const user = await userSchema.findByIdAndDelete(req.params.id);
            if (!user) {
                return res.status(404).json({ message: 'user not found' });
            }
            return res.status(200).json({ message: 'user deleted successfully' });
        } catch (error) {
            return res.status(500).json({ message: 'Internal server error' });
        }
    }),

};

export default UsersControllers;