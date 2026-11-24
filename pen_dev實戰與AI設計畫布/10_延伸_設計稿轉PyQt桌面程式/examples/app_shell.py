"""10 範例 B：PyQt6 後台主視窗（側邊欄＋統計卡＋深淺色主題）
對照 pen.dev：
- 變數（含 mode 主題軸）→ TOKENS 字典，依主題產生 QSS
- Flex 排版 → QHBoxLayout / QVBoxLayout + setSpacing / setContentsMargins
- fill_container → stretch 參數；元件 StatCard → 自訂 QFrame 類別
- shadow 效果 → QGraphicsDropShadowEffect（QSS 不支援 box-shadow）
"""
import sys

from PyQt6.QtGui import QColor
from PyQt6.QtWidgets import (
    QApplication, QButtonGroup, QFrame, QGraphicsDropShadowEffect, QHBoxLayout,
    QLabel, QMainWindow, QPushButton, QVBoxLayout, QWidget,
)

# pen.dev 的 GetVariables() 結果，整理成 {變數: {主題: 值}}
TOKENS = {
    "primary":      {"light": "#2563EB", "dark": "#3B82F6"},
    "primary-soft": {"light": "#DBEAFE", "dark": "#1E3A8A"},
    "surface":      {"light": "#FFFFFF", "dark": "#0F172A"},
    "surface-alt":  {"light": "#F9FAFB", "dark": "#1E293B"},
    "text":         {"light": "#111827", "dark": "#F1F5F9"},
    "text-muted":   {"light": "#6B7280", "dark": "#94A3B8"},
    "border":       {"light": "#E5E7EB", "dark": "#334155"},
}


def build_qss(mode: str) -> str:
    t = {name: values[mode] for name, values in TOKENS.items()}
    return f"""
    QMainWindow, QWidget#Content {{ background: {t['surface-alt']}; }}
    QWidget#Sidebar {{ background: {t['surface']}; border-right: 1px solid {t['border']}; }}
    QLabel {{ color: {t['text']}; }}
    QLabel#Logo {{ font-size: 18px; font-weight: 700; }}
    QLabel#PageTitle {{ font-size: 24px; font-weight: 700; }}
    QLabel#Muted {{ color: {t['text-muted']}; font-size: 13px; }}
    QLabel#Value {{ font-size: 28px; font-weight: 700; }}
    QPushButton#NavItem {{
        text-align: left; padding: 10px 14px; border: none; border-radius: 8px;
        color: {t['text-muted']}; background: transparent; font-size: 14px;
    }}
    QPushButton#NavItem:hover {{ background: {t['surface-alt']}; }}
    QPushButton#NavItem:checked {{ background: {t['primary-soft']}; color: {t['primary']}; font-weight: 700; }}
    QPushButton#ThemeToggle {{
        padding: 8px 14px; border: 1px solid {t['primary']}; border-radius: 8px;
        color: {t['primary']}; background: {t['surface']};
    }}
    QFrame#StatCard {{ background: {t['surface']}; border: 1px solid {t['border']}; border-radius: 12px; }}
    """


class StatCard(QFrame):
    """pen.dev 元件 StatCard：vertical，padding 20，gap 6，寬度 fill_container"""

    def __init__(self, label: str, value: str, note: str):
        super().__init__(objectName="StatCard")
        layout = QVBoxLayout(self)
        layout.setContentsMargins(20, 20, 20, 20)
        layout.setSpacing(6)
        layout.addWidget(QLabel(label, objectName="Muted"))
        layout.addWidget(QLabel(value, objectName="Value"))
        layout.addWidget(QLabel(note, objectName="Muted"))
        shadow = QGraphicsDropShadowEffect(self)   # effect: shadow（y 8、blur 24）
        shadow.setOffset(0, 8)
        shadow.setBlurRadius(24)
        shadow.setColor(QColor(15, 23, 42, 30))
        self.setGraphicsEffect(shadow)


class AppShell(QMainWindow):
    def __init__(self):
        super().__init__()
        self.mode = "light"
        self.setWindowTitle("LearnHub 後台")
        self.resize(1100, 640)

        root = QWidget()
        row = QHBoxLayout(root)                 # 最外層：horizontal，gap 0
        row.setContentsMargins(0, 0, 0, 0)
        row.setSpacing(0)

        # Sidebar：vertical，固定寬 220，padding 16，gap 4
        sidebar = QWidget(objectName="Sidebar")
        sidebar.setFixedWidth(220)
        side = QVBoxLayout(sidebar)
        side.setContentsMargins(16, 20, 16, 20)
        side.setSpacing(4)
        side.addWidget(QLabel("LearnHub", objectName="Logo"))
        side.addSpacing(16)
        group = QButtonGroup(self)
        for i, text in enumerate(["總覽", "課程管理", "學員", "訂單", "設定"]):
            btn = QPushButton(text, objectName="NavItem", checkable=True)
            btn.setChecked(i == 0)
            group.addButton(btn)
            side.addWidget(btn)
        side.addStretch()                       # 把選單推到上方
        toggle = QPushButton("切換深淺色", objectName="ThemeToggle")
        toggle.clicked.connect(self.toggle_theme)
        side.addWidget(toggle)

        # Content：vertical，padding 32，gap 24，寬度 fill_container
        content = QWidget(objectName="Content")
        body = QVBoxLayout(content)
        body.setContentsMargins(32, 32, 32, 32)
        body.setSpacing(24)
        body.addWidget(QLabel("總覽", objectName="PageTitle"))

        cards = QHBoxLayout()                   # KPI Row：horizontal，gap 24
        cards.setSpacing(24)
        for label, value, note in [
            ("本月新學員", "1,284", "較上月 +12%"),
            ("課程完成率", "75%", "較上月 +3%"),
            ("本月營收", "NT$ 486K", "較上月 +8%"),
        ]:
            cards.addWidget(StatCard(label, value, note), 1)   # stretch 1 = fill_container
        body.addLayout(cards)
        body.addStretch()

        row.addWidget(sidebar)
        row.addWidget(content, 1)               # stretch 1 = fill_container
        self.setCentralWidget(root)
        self.apply_theme()

    def apply_theme(self):
        QApplication.instance().setStyleSheet(build_qss(self.mode))

    def toggle_theme(self):
        self.mode = "dark" if self.mode == "light" else "light"
        self.apply_theme()


if __name__ == "__main__":
    app = QApplication(sys.argv)
    window = AppShell()
    window.show()
    sys.exit(app.exec())
