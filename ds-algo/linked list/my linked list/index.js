"use strict";
// Linked List 
// Head, tail
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var genRanHex = function (size) { return __spreadArray([], Array(size), true).map(function () { return Math.floor(Math.random() * 16).toString(16); }).join(''); };
var lengthOfAddress = 8;
var linkedList = /** @class */ (function () {
    function linkedList() {
        var _this = this;
        this.list = [];
        this.listLen = function () { return _this.list.length; };
        this.getList = function () { return console.log(_this.list); };
        this.pushToIndex = function (val, index, address) {
            if (address === void 0) { address = genRanHex(lengthOfAddress); }
            if (index > _this.listLen()) {
                console.log("You can only push at the end or inside linked list");
                return;
            }
            // TODO Add node to first position 
            if (index === 0) {
                // ! Generating address for first node if list already contains node, else assign null address to node
                var first_Element_Address = _this.listLen() ? genRanHex(lengthOfAddress) : null;
                // Insert at starting & pointing address of first 
                _this.list.unshift([val, first_Element_Address]);
                console.log("+ Node Added, starting ", _this.list[0]);
                return;
            }
            // TODO Added node to last
            if (index === _this.listLen()) {
                // * Handle address when there is only no item in index
                // Create address for last
                var lastElementAddress = genRanHex(lengthOfAddress);
                // Second last pointing to last node's address
                _this.list[_this.listLen() - 1][1] = lastElementAddress;
                // Added element to last
                _this.list.push([val, null]);
                console.log("+ Node Added, end ", [val, null]);
                return;
            }
            // TODO Add to middle
            // Get the address of future next element, this address will be pointed by new Node
            var future_Next_Element_Address = _this.list[index - 1][1];
            // Previous storing address of new node
            _this.list[index - 1][1] = address;
            // Add value of new node to index & new node pointing to next element
            _this.list.splice(index, 0, [val, future_Next_Element_Address]); // Yes, splice can insert value to array
        };
        this.removeFromIndex = function (index) {
            if (_this.listLen() === 0)
                return;
            // TODO Remove first element 
            if (index === 0)
                return _this.list.splice(0, 1);
            // Remove from last
            if (index === _this.listLen() - 1) {
                // Remove last element
                _this.list.splice((_this.listLen() - 1), 1);
                _this.list[_this.listLen() - 1][1] = null;
                return;
            }
            // TODO Remove from middle
            var address_Of_Element_That_Delete_Element_Pointing = _this.list[index][1];
            // Delete Previous element pointing to delete next element
            _this.list[index - 1][1] = address_Of_Element_That_Delete_Element_Pointing;
            // Remove element from middle
            _this.list.splice(index, 1);
            return;
        };
        // TODO Get the all node values
        this.getListValues = function () { return _this.list.map(function (val) { return val[0]; }); };
    }
    // constructor(val){    }
    // Add item to the end of list
    linkedList.prototype.push = function (newNodeValue) {
        // Insert first list
        if (this.listLen() === 0) {
            this.list[0] = [newNodeValue, null];
            return;
        }
        // * Add address of new node to last element of the list
        this.list[this.listLen() - 1][1] = genRanHex(lengthOfAddress);
        // * Added the items to last in the list
        this.list.push([newNodeValue, null]);
    };
    return linkedList;
}());
// Create first node
var newNode = new linkedList();
newNode.push(45);
newNode.getList();
// Second Node
newNode.push(55);
newNode.getList();
// Third Node
newNode.push(45);
newNode.getList();
// Fourth Node
newNode.push(29);
newNode.getList();
// Fifth Node
newNode.push(87);
newNode.getList();
// Push item to the middle of index
newNode.pushToIndex(23, 1);
newNode.getList();
// Adding items at the starting
newNode.pushToIndex(12, 0);
newNode.getList();
newNode.pushToIndex(34, 0);
newNode.getList();
// newNode.removeFromIndex(0);
// newNode.getList(); 
newNode.removeFromIndex(4);
newNode.getList();
newNode.removeFromIndex(6);
newNode.getList();
newNode.removeFromIndex(0);
newNode.getList();
console.log(newNode.listLen());
console.log(newNode.getListValues());
