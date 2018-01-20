module.exports = function include(str){
    if(document != null){
        var scriptElement = document.createElement("script");
        scriptElement.setAttribute("src", str);
        var headElement = document.querySelector("head");
        if(headElement != null){
        headElement.appendChild(scriptElement);
        } else {
            console.error("[OceanBeam] Cannot find head element");
        }
    } else {
        return {
            type: "fatal",
            message: "Cannot find document"
        }
    }
}