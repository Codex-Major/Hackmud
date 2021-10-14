function(context,args){// start:0
	var g={},r,l

	let list=#fs.scripts.fullsec()
	
	for(var i=args.start;i<list.length;i++){
		#D(i)
		#ms.chats.join({channel:list[i]})
		#D(#fs.scripts.fullsec({sector:list[i]}))
		#ms.chats.leave({channel:list[i]})
	}
}