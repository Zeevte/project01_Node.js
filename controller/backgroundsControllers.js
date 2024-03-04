import BackgroundsSchma from "../Models/BackgroundsSchma.js";
const BackgroundsControllers = {

    get: async (req, res) => {
        try {
            const data = await BackgroundsSchma.find();
            res.json(data);
        }
        catch (error) {
            console.log(error.message)
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    add: async (req, res) => {
        const { name, categoriId, url } = req.body;
        console.log(name, categoriId, url)
        try {
            const data = await BackgroundsSchma.create({ name, categoriId, url });
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
            const updatedUser = await BackgroundsSchma.findByIdAndUpdate(
                id, req.body,
                { new: true, });
            res.json(updatedUser);
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    },
    delete: (async (req, res) => {
        try {
            const user = await BackgroundsSchma.findByIdAndDelete(req.params.id);
            if (!user) {
                return res.status(404).json({ message: 'Background not found' });
            }
            return res.status(200).json({ message: 'Background deleted successfully' });
        } catch (error) {
            return res.status(500).json({ message: 'Internal server error' });
        }
    }),

};

export default BackgroundsControllers;