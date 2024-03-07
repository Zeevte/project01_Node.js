import SubcategoriesSchema from "../Models/SubcategoriesSchema.js";
const SubCategoriesControllers = {

    get: async (req, res) => {
        try {
            const data = await SubcategoriesSchema.find();
            res.json(data);
        }
        catch (error) {
            console.log(error.message)
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    add: async (req, res) => {
        const { name,categoriId} = req.body;
        console.log(name, categoriId)
        try {
            const data = await SubcategoriesSchema.create({ name,categoriId});
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
            const updatedUser = await SubcategoriesSchema.findByIdAndUpdate(
                id, req.body,
                { new: true, });
            res.json(updatedUser);
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    },
    delete: (async (req, res) => {
        try {
            const user = await SubcategoriesSchema.findByIdAndDelete(req.params.id);
            if (!user) {
                return res.status(404).json({ message: 'user not found' });
            }
            return res.status(200).json({ message: 'user deleted successfully' });
        } catch (error) {
            return res.status(500).json({ message: 'Internal server error' });
        }
    }),

};

export default SubCategoriesControllers;