module.exports = function(controller) {
    // create special handlers for certain actions in buttons
    // if the button action is 'feedback', act as if user said that thing
    controller.middleware.receive.use(function(bot, message, next) {
    if (message.type == 'luis_callback') {
        if (message.actions[0].name.match(/^feedback$/)) {
            var reply = message.original_message;

            for (var a = 0; a < reply.attachments.length; a++) {
                reply.attachments[a].actions = null;
            }

            var feedback_respone = (message.actions[0].value > 0)
                ? "Thanks for the feedback!"
                : "Sorry... I'll try to do a better job next time.";

            reply.attachments.push(
                {
                    text: feedback_respone,
                }
            );

            bot.replyInteractive(message, reply);
        }
    }

    next();
    });
}
