<script>
	//import vanillaTerminal from './vanilla-terminal.js';

	$effect(() => {
		/*const term = new vanillaTerminal({
			commands: {
				flavour: (terminal) => {
					terminal.output('There is only one flavour for your favorite🍦and it is <b>vanilla<b>.');

					terminal.setPrompt('@soyjavi <small>❤️</small> <u>vanilla</u> ');
				},

				async: (terminal) => {
					terminal.idle();

					setTimeout(() => terminal.output('Async 300'), 300);

					setTimeout(() => terminal.output('Async 1300'), 1300);

					setTimeout(() => {
						terminal.output('Async 2000');

						terminal.setPrompt();
					}, 2000);
				}
			},

			// welcome: 'Welcome...',

			// prompt: 'soyjavi at <u>Macbook-Pro</u> ',

			separator: '$'
			});

		term.onInput((command, parameters) => {
			console.log('⚡️onInput', command, parameters);
		});

		term.prompt('Your name', (name) => {
			term.output(`Hi ${name}!`);

			term.setPrompt(`${name} `);
			});*/
	});
</script>

<!--<div>
	<div class="h-screen w-screen" id="vanilla-terminal"></div>
	<script src="/vanilla-terminal.js"></script>
	</div>-->

<p id="grub">{'Grub rescue>'}</p>

<style>
	@import url('https://fonts.cdnfonts.com/css/perfect-dos-vga-437');
	#grub {
		font-family: 'Perfect DOS VGA 437', sans-serif;
	}
</style>
