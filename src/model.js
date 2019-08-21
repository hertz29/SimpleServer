const commonFunctions = require('./commonFunctions');
let videoList = [];



const addVideo = async (request, response) => {
    console.log('In Add Video Model');
    videoList.push(commonFunctions.createVideoResource(request));
    response.statusCode = 201;
    return;
};


const getAllVideos = async (request, response) => {
    console.log('In get all Videos');
    console.log(videoList.toString());
    response.body = videoList;

    return;
};


const deleteVideo = async (request, response) => {
    console.log('In Add Video Model')
    videoList.forEach((item) => {
    });
    return;
};



module.exports = {
    addVideo,
    deleteVideo,
    getAllVideos
}
