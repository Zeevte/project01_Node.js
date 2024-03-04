import CategoriesOfBackgroundsSchma from "../Models/CategoriesOfBackgroundsSchma.js";
const CategoriesOfBackgroundsController = {

    get: async (req, res) => {
        try {
            const data = await CategoriesOfBackgroundsSchma.find();
            res.json(data);
        }
        catch (error) {
            console.log(error.message)
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    add: async (req, res) => {
        const { name } = req.body;
        console.log(name)
        try {
            const data = await CategoriesOfBackgroundsSchma.create({ name});
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
            const updatedUser = await CategoriesOfBackgroundsSchma.findByIdAndUpdate(
                id, req.body,
                { new: true, });
            res.json(updatedUser);
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    },
    delete: (async (req, res) => {
        try {
            const user = await CategoriesOfBackgroundsSchma.findByIdAndDelete(req.params.id);
            if (!user) {
                return res.status(404).json({ message: 'Background not found' });
            }
            return res.status(200).json({ message: 'Background deleted successfully' });
        } catch (error) {
            return res.status(500).json({ message: 'Internal server error' });
        }
    }),

};

export default CategoriesOfBackgroundsController;