##gitの使い方

#GitHubCLIでレポジトリを作る
  gh repo create <repo-name> --public
    --public → 公開リポジトリにする（ポートフォリオ向け）
    --private にしてもOK（練習中だけ隠したいなら）
#レポジトリをクローンしてフォルダをローカルPCに引っ張る
  git clone https://github.com/<GitHubユーザー名>/<repo-name>.git
  cd curry-shop-site

# 初回だけ（名前・メール設定）
git config --global user.name "Kotani"
git config --global user.email "kotani@example.com"
🌿 基本のブランチ運用フロー
① 新しいブランチを作る
git checkout -b feat/hero

ブランチ＝mainから分岐した作業用の線路。

② 変更をステージ＆コミット
git add .
git commit -m "feat(web): add hero section with CTA"

コマンド	意味
git add .	変更したファイルを「コミット対象」に登録
git commit -m	スナップショットとして保存（履歴になる）

💡 コミットメッセージのPrefix例
Prefix	意味
feat:	機能追加
fix:	バグ修正
docs:	ドキュメントのみ変更
chore:	設定・環境変更など

③ リモートへ初プッシュ
git push -u origin feat/hero

💡 -u = 「このブランチの追跡先を登録」
→ 以降は git push だけでOK。

④ Pull Requestを作成
gh pr create --fill

PR＝変更の申請書。
レビューを受けて問題なければ main にマージ。

⑤ 修正したら再コミット＆プッシュ
git add .
git commit -m "fix(web): adjust button spacing"
git push

⑥ main に反映＆最新化
git checkout main
git pull --ff-only

💡 --ff-only：安全な「早送りマージ」。他人の変更を壊さない。

⑦ ブランチ削除
git branch -d feat/hero
gh pr delete --yes   # （マージ済みならOK）

💬 用語ざっくり説明
用語	意味
push	ローカルの変更をGitHubにアップロードする
pull	GitHubからローカルに変更を取得（fetch + merge）
commit	ファイルの変更を履歴として記録
branch	作業を分岐するための枝
merge	変更をmainに統合する
PR（Pull Request）	「この変更を取り込んでいい？」という申請

⚙️ チーム開発の鉄則
main は 直接 push 禁止（保護設定）
PRは 小さく・短く・タイトル規約を守る
CI（自動テスト）は npm ci && npm run build が緑ならOK

🔍 よく使う確認コマンド
コマンド	目的
git branch -vv	今いるブランチと追跡先を確認
git remote -v	origin のURL確認
gh pr status	現在のPRの状態
gh pr list	開いているPR一覧
gh pr view	現在のブランチのPR詳細
gh pr diff	差分をCLIで確認
gh pr view --web	ブラウザでPRを開く

💬 川田コメント風まとめ
「いや〜、Gitは最初だけ筋トレみたいなもんです。
でも慣れると、“過去の自分の努力を自在に呼び出せる”最高の技術ですからね。」

---
💡配置は `docs/git-help.md` にしてOK。
コミット時に：
```bash
git add docs/git-help.md
git commit -m "docs: add Git usage guide"
git push