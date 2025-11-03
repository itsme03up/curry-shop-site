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
① mainブランチを保護する（GitHub設定）
GitHub → 該当リポジトリ →
Settings → Branches → Branch protection rules → [Add rule]

設定項目はこれだけ：
✅ Branch name pattern → main
✅ Require a pull request before merging → ON
✅ Require approvals → OFF（ひとり開発なら不要）
✅ Include administrators → OFFでもOK（自分が管理者なら）

💡これで：
main に直接 push → 「保護されてるからダメです」とGitHubが止めてくれる。

② 今後の開発フローを切り替える
# mainから分岐して新機能用ブランチ作る
git checkout main
git pull origin main
git checkout -b feat/api-menu

# 作業してコミット
git add .
git commit -m "feat(api): add menu endpoint"

# pushしてPR作成
git push -u origin feat/api-menu
gh pr create --fill

# GitHubで確認してマージ
gh pr merge --squash --delete-branch

🪄 ポイント
--squash でコミットを1つにまとめて main にキレイに反映。
--delete-branch で作業ブランチを自動削除してくれる。

③ どうしても main に push したい時は
mainから新ブランチを切って保険を取る：
git checkout -b backup/main-$(date +%Y%m%d)
そのブランチをGitHubにpushしておく：

git push origin backup/main-20251103
それからmainをforce push（どうしても必要な時だけ）。

💬 川田風まとめ
「いやー、main直pushは“家の配電盤を素手で触る”みたいなもんです。
小規模でもブランチ切って作業するだけで、未来の自分への優しさが段違いですよ。」

GitHubでの“本流”のやり方。
1人でも履歴が綺麗に残るし、後で「あの変更いつ入れたっけ？」がすぐ分かります。

# 今の作業ブランチをpush（まだmainには入っていない）
git push -u origin feat/menu-api

# PRを作成
gh pr create --fill  # or GitHubの画面で「New Pull Request」

# （GitHub上で確認）→ Merge pull request → squash & delete branch
gh pr merge --squash --delete-branch

💡 squash merge を選ぶと：
コミットが1つにまとまって main に入る
履歴がスッキリする
作業ブランチは自動削除できる