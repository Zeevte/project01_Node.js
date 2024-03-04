import CategoriesSchma from "../Models/CategoriesSchma.js";
const CategoriesControllers = {

    get: async (req, res) => {
        try {
            const data = await CategoriesSchma.find();
            res.json(data);
        }
        catch (error) {
            console.log(error.message)
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    add: async (req, res) => {
        const { name, image} = req.body;
        console.log(name, image)
        try {
            const data = await CategoriesSchma.create({ name,image});
            res.json(data);
        }
        catch (error) {
            console.log(error.message)
            res.status(500).json({ message: 'Internal server error' });
        }
    },
    update: async (req, res) => {
        const { id } = req.params;
        try {
            const updatedUser = await CategoriesSchma.findByIdAndUpdate(
                id, req.body,
                { new: true, });
            res.json(updatedUser);
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    },
    delete: (async (req, res) => {
        try {
            const user = await CategoriesSchma.findByIdAndDelete(req.params.id);
            if (!user) {
                return res.status(404).json({ message: 'user not found' });
            }
            return res.status(200).json({ message: 'user deleted successfully' });
        } catch (error) {
            return res.status(500).json({ message: 'Internal server error' });
        }
    }),

};

export default CategoriesControllers;