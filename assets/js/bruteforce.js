function main(args) {
    var chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var passwordLength = 0;
    console.log("Enter the password length");
    passwordLength = 5;
    var iPossibilities = Math.pow(chars.length, passwordLength);
    console.log(iPossibilities);
    
    var stopwatch = new Stopwatch();

    stopwatch.start();

    for (var i = 0; i < iPossibilities; i++) {
    	var theword = "";
    	var val = i;
    	for (var j = 0; j < passwordLength; j++) {
    		var ch = val % chars.length;
    		theword = chars[ch] + theword;
    		val = Math.round(val / chars.length);
    	}
    }

    stopwatch.stop();

    console.log(stopwatch.delta());


}

/**
 * Simple stopwatch
 */
Stopwatch = function() {
    var interval;
    var options = options || {};
    options.delay = options.delay || 1;

    this.start = function() {
        if (!interval) {
            offset = Date.now();
            interval = setInterval(this.update, options.delay);
        }
    }
    this.stop = function() {
        if (interval) {
            clearInterval(interval);
            interval = null;
        }
    }
    this.reset = function() {
        clock = 0;
        render();
    }
    this.update = function() {
        clock += delta();
        render();
    }
    this.delta = function() {
        var now = Date.now(),
            d = now - offset;
        offset = now;
        return d;
    }
}

main();