"""02 範例 B：PyQt6 登入視窗
對照 pen.dev 圖層：登入視窗 > Header / 表單 > 帳號欄位、密碼欄位、登入按鈕
圖層名稱 → setObjectName()，QSS 就能用 #名稱 指定樣式。
"""
import sys

from PyQt6.QtWidgets import (
    QApplication, QDialog, QLabel, QLineEdit, QPushButton, QVBoxLayout, QWidget,
)

QSS = """
QDialog#LoginWindow { background: #FFFFFF; }
QLabel#Title { font-size: 22px; font-weight: 700; color: #111827; }
QLabel#Subtitle { font-size: 13px; color: #6B7280; }
QLineEdit {
    min-height: 40px; padding: 0 12px;
    border: 1px solid #D1D5DB; border-radius: 8px; font-size: 14px;
}
QLineEdit:focus { border-color: #2563EB; }
QPushButton#LoginButton {
    min-height: 44px; border: none; border-radius: 10px;
    background: #2563EB; color: #FFFFFF; font-size: 15px; font-weight: 700;
}
QPushButton#LoginButton:hover { background: #1D4ED8; }
"""


class LoginWindow(QDialog):
    def __init__(self):
        super().__init__()
        self.setObjectName("LoginWindow")
        self.setWindowTitle("登入")
        self.setFixedWidth(400)

        root = QVBoxLayout(self)              # 登入視窗：vertical
        root.setContentsMargins(40, 40, 40, 40)  # padding 40
        root.setSpacing(28)                   # gap 28

        header = QWidget(objectName="Header")  # Header：vertical, gap 6
        header_layout = QVBoxLayout(header)
        header_layout.setContentsMargins(0, 0, 0, 0)
        header_layout.setSpacing(6)
        header_layout.addWidget(QLabel("歡迎回來", objectName="Title"))
        header_layout.addWidget(QLabel("請輸入帳號與密碼", objectName="Subtitle"))

        form = QWidget(objectName="Form")      # 表單：vertical, gap 12
        form_layout = QVBoxLayout(form)
        form_layout.setContentsMargins(0, 0, 0, 0)
        form_layout.setSpacing(12)
        account = QLineEdit(objectName="AccountField", placeholderText="帳號")
        password = QLineEdit(objectName="PasswordField", placeholderText="密碼")
        password.setEchoMode(QLineEdit.EchoMode.Password)
        login = QPushButton("登入", objectName="LoginButton")
        login.clicked.connect(self.accept)
        for w in (account, password, login):
            form_layout.addWidget(w)

        root.addWidget(header)
        root.addWidget(form)


if __name__ == "__main__":
    app = QApplication(sys.argv)
    app.setStyleSheet(QSS)
    window = LoginWindow()
    window.show()
    sys.exit(app.exec())
