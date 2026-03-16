const express = require("express");
const router = express.Router();
const multer = require("multer");
const Note = require("../models/Note");



const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,"uploads/");
    },
    filename: function(req,file,cb){
        cb(null,Date.now()+"-"+file.originalname);
    }
});

const upload = multer({storage:storage});


router.post("/upload", upload.single("file"), async (req,res)=>{
    try{

        const {title,subject,uploadedBy} = req.body;

        const newNote = new Note({
            title,
            subject,
            uploadedBy,
            file:req.file.filename
        });

        await newNote.save();

        res.json({
            message:"Note uploaded successfully",
            note:newNote
        });

    }catch(err){
        res.status(500).json({error:err.message});
    }
});
router.get("/", async (req,res)=>{
    try{

        const notes = await Note.find().sort({createdAt:-1});

        res.json(notes);

    }catch(err){
        res.status(500).json({error:err.message});
    }
});
router.get("/download/:id", async (req,res)=>{
    try{

        const note = await Note.findById(req.params.id);

        if(!note){
            return res.status(404).json({message:"Note not found"});
        }


        note.downloads += 1;
        await note.save();

        const filePath = `uploads/${note.file}`;

        res.download(filePath);

    }catch(err){
        res.status(500).json({error:err.message});
    }
});

module.exports = router;