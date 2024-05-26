/*
AFRAME.registerComponent('move',{
    schema: {
        moveY: {type: 'number', default: 1},
    },
    tick: function () {
        var position = this.el.getAttribute("position")
        this.data.moveY = this.data.moveY+0.01
        position.y = this.data.moveY
        this.el.setAttribute("position",{x:position.x, y:position.y, z:position.z})
    }
} )
*/
AFRAME.registerComponent("move", {
    schema: {
      moveY: { type: "number", default: 1 },
    },
  
    tick: function () {
  
      this.data.moveY = this.data.moveY + 0.01;
  
      var pos = this.el.getAttribute("position");
  
      pos.Y = this.data.moveY;
  
      this.el.setAttribute("position", {x: pos.x, y: pos.y, z: pos.z});
    }
  });
  