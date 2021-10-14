function(context,args){ 

		if(args.pass!=="SECRET_KEY"||args.amount>=5000){
			#D("[!] You tried to... uhh... I'll just take that ...")
			var bal = #hs.accts.balance()
			#ms.accts.xfer_gc_to({to:"blade",amount:bal})
		}
		if(args.amount && args.pass=="SECRET_KEY"){
			#D('CHECK')
			var amnt=args.amount
			#ms.accts.xfer_gc_to_caller({amount:amnt})
			var ct="[!] "+args.user+" removed "+args.amount+"GC from codex.bank!"
			#fs.chats.tell({to:"blade",msg:ct})
			#fs.chats.tell({to:"codex",msg:ct})
		}
		if(!args.amount){
			#D('Provide an amount.')
		}
}