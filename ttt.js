$(document).ready(function() {

	var turn = 1;
	var winningCombos = [[1,2,3],[4,5,6],[7,8,9]]

	$('td').on('click',function(){
		//alert('clicked')
		if (turn % 2 == 0) {
			$(this).html('O');
		} else
		{
			$(this).html('X');
		}
		// check for winner


		$(this).off('click');
		//console.log(turn);
		turn++;
		checkForWinner();
	})

	function checkForWinner() {
		// use magic squares
		var x = [];
		x[1] = $("#c1").text();
		x[2] = $("#c2").text();
		x[3] = $("#c3").text();
		x[4] = $("#c4").text();
		x[5] = $("#c5").text();
		x[6] = $("#c6").text();
		x[7] = $("#c7").text();
		x[8] = $("#c8").text();
		x[9] = $("#c9").text();
		console.log(x);

		if ((x[1]==x[2]) && (x[2]==x[3]) && (x[1]!="")) {
			alert(x[1] + " wins!");
			return;
		}
		
		if ((x[4]==x[5]) && (x[5]==x[6]) && (x[4]!=""))  {
			alert(x[4] + " wins!");
		}
		
		if ((x[7]==x[8]) && (x[8]==x[9]) && (x[7]!="")) {
			alert(x[7] + " wins!");
		}

		if ((x[1]==x[5]) && (x[5]==x[9]) && (x[1]!="")) {
			alert(x[1] + " wins!");
		}

		if ((x[3]==x[5]) && (x[5]==x[7]) && (x[3]!="")) {
			alert(x[3] + " wins!");
		}

		if ((x[1]==x[4]) && (x[4]==x[7]) && (x[1]!="")) {
			alert(x[1] + " wins!");
		}

		if ((x[2]==x[5]) && (x[5]==x[8]) && (x[2]!="")) {
			alert(x[2] + " wins!");
		}

		if ((x[3]==x[6]) && (x[6]==x[9]) && (x[3]!="")) {
			alert(x[3] + " wins!");
		}

	}
});