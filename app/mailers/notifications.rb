class Notifications < ActionMailer::Base
  default from: "mycv@example.com"

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.notifications.hello.subject
  #
  def hello
    @greeting = Message.last.name
    @greeting2 = Message.last.text

    mail to: "meksionek@gmail.com"
  end
end
